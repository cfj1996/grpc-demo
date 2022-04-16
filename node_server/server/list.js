const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

function add(call, callback) {
  const {title, content, tags} = call.request;
  console.log('addList request', call.request, Array.isArray(tags));
  prisma.list.create({
    data: {
      title,
      content,
      tags: {
        create: tags.map(i => ({
          name: i.name
        }))
      }
    }
  }).then(res => {
    console.log('addList res', res);
    callback(null, res);
  }).catch((error) => {
    console.log('addList error', error);
    callback(error, null);
  });
}

async function del(call, callback) {
  console.log('delList request', call.request);
  const {id} = call.request;



  const delTag = prisma.tag.deleteMany({
    where: {
      listId: id
    }
  })
  const delList = prisma.list.delete({
    where: {
      id
    },

  })
  try {
    const res  = await prisma.$transaction([delTag, delList])
    console.log('delList res', res);
    callback(null, {success: true});
  }catch(error){
    callback(error, null);
  }
}

async function edit(call, callback) {
  console.log('editList request', call.request);
  const {id, title, content, tags} = call.request;
  try {
    const listTags = await prisma.tag.findMany({
      where: {
        listId: id
      }
    })
    const delTag = listTags.filter(i => !tags.some(tag => tag.id === i.id))
    console.log('delTag', delTag);
    const res = await prisma.list.update({
      where: {
        id
      },
      data: {
        title,
        content,
        tags: {
          upsert: tags?.map(tag => {
            const {id, ...other} = tag
            return ({
              create: other,
              update: other,
              where: { id: id },
            })
          }),
          deleteMany: delTag,
        }
      }
    });
    callback(null, res);
  } catch (error) {
    callback(error, null);
  }
}

function find(call, callback) {
  console.log('findList request', call.request);
  const {id} = call.request;
  prisma.list.findUnique({
    where: {
      id
    },
    include: {
      tags: true,
    },
  }).then(res => {
    console.log('findList res', res);
    callback(null, res);
  }).catch((error) => {
    console.log('findList error', error);
    callback(error, null);
  });
}

async function getAll(call, callback) {
  console.log('token', call.metadata.get('token')[0]);
  try {
    // const token = call.metadata.get('token')[0]
    // if(!token){
    //   throw {
    //     code: 16,
    //     details: '未登录',
    //     metadata: call.metadata,
    //   }
    // }
    const {page = 1, pageSize = 20} = call.request;
    const count = await prisma.list.count()
    const res = await prisma.list.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize
    });
    callback(null, {
      count: count,
      data: res
    })
  } catch (err) {
    callback(err, null)
  }
}

module.exports = {
  add, del, edit, find, getAll
};
