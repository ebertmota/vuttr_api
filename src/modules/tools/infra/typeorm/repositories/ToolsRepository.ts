import { getRepository, ILike, Repository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import IUpdateToolDTO from '@modules/tools/dtos/IUpdateToolDTO';
import Tool from '../entities/Tool';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async findAll(): Promise<Tool[] | undefined> {
    const tools = await this.ormRepository.find();

    return tools;
  }

  public async findByTitle(title: string): Promise<Tool[] | undefined> {
    const tools = await this.ormRepository.find({
      where: {
        title: ILike(`%${title}%`),
      },
    });

    return tools;
  }

  public async findByLink(link: string): Promise<Tool[] | undefined> {
    const tools = await this.ormRepository.find({
      where: {
        link,
      },
    });

    return tools;
  }

  public async findByTags(tags: string): Promise<Tool[] | undefined> {
    const findTools = await this.ormRepository
      .createQueryBuilder('tools')
      .where(":tags = ANY ( string_to_array(tools.tags, ','))", { tags })
      .getMany();

    return findTools || undefined;
  }

  public async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      title,
      link,
      description,
      tags,
    });

    await this.ormRepository.save(tool);

    return tool;
  }

  public async update({
    id,
    title,
    link,
    description,
    tags,
  }: IUpdateToolDTO): Promise<Tool> {
    const tool = await this.ormRepository.find({ where: { id } });

    if (!tool) {
      throw new AppError('Tool with provided id not found', 404);
    }

    return this.ormRepository.save({
      id,
      title,
      link,
      description,
      tags,
    });
  }

  public async delete(toolId: string): Promise<void> {
    const tool = await this.ormRepository.find({
      where: {
        id: toolId,
      },
    });

    if (tool.length === 0) {
      throw new AppError('Tool with provided Id was not found.', 404);
    }

    await this.ormRepository.delete(toolId);
  }
}

export default ToolsRepository;
