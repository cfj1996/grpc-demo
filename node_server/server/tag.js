const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

function add(call, callback) {
  const {name, listId} = call.request;
  console.log('addTag request', call.request);
  prisma.tag.create({
    data: {
      name,
      listId
    }
  }).then(res => {
    console.log('addTag res', res);
    callback(null, res);
  }).catch((error) => {
    console.log('addTag error', error);
    callback(error, null);
  });
}

function del(call, callback) {
  console.log('deTag request', call.request);
  const {id} = call.request;
  prisma.tag.delete({
    where: {
      id
    }
  }).then(res => {
    console.log('deTag res', {success: true});
    callback(null, res);
  }).catch((error) => {
    console.log('deTag error', error);
    callback(error, null);
  });
}

function edit(call, callback) {
  console.log('editTag request', call.request);
  const {id, name} = call.request;
  prisma.tag.update({
    where: {
      id
    },
    data: {
      name
    }
  }).then(res => {
    console.log('editTag res', res);
    callback(null, res);
  }).catch((error) => {
    console.log('editTag error', error);
    callback(error, null);
  });
}

function find(call, callback) {
  console.log('findTag request', call.request);
  const {id} = call.request;
  prisma.tag.findUnique({
    where: {
      id
    }
  }).then(res => {
    console.log('findTag res', {success: true});
    callback(null, res);
  }).catch((error) => {
    console.log('findTag error', error);
    callback(error, null);
  });
}
async function getAll(call, callback) {
  try {
    const {page = 1, pageSize = 20} = call.request;
    const count = await prisma.tag.count()
    const res = await prisma.tag.findMany({
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
