/**
 * @name: tag
 * @user: cfj
 * @date: 2022/4/16 14:42
 */
import { TagServiceClient } from '../proto-build/TagServiceClientPb';

const TagService = new TagServiceClient('http://localhost:8080');

export default TagService;
