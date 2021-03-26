import Tool from '../infra/typeorm/entities/Tool';

import ICreateToolDTO from '../dtos/ICreateToolDTO';
import IUpdateToolDTO from '../dtos/IUpdateToolDTO';

interface IToolsRepository {
  findAll(): Promise<Tool[] | undefined>;
  findByTitle(title: string): Promise<Tool[] | undefined>;
  findByLink(link: string): Promise<Tool[] | undefined>;
  findByTags(tags: string): Promise<Tool[] | undefined>;
  create(data: ICreateToolDTO): Promise<Tool>;
  update(data: IUpdateToolDTO): Promise<Tool>;
  delete(toolId: string): Promise<void>;
}

export default IToolsRepository;
