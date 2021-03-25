import { EntityRepository, Any, Repository, Like, ILike, In } from 'typeorm';
import Tool from '../models/Tool';

@EntityRepository(Tool)
class ToolsRepository extends Repository<Tool> {
  public async findByTags(tags: string): Promise<Tool[] | null> {
    const findTools = await this.createQueryBuilder('tools')
      .where(":tags = ANY ( string_to_array(tools.tags, ','))", { tags })
      .getMany();

    return findTools || null;
  }
}

export default ToolsRepository;
