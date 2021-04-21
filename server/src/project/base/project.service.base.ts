import { PrismaService } from "nestjs-prisma";
import { Prisma, Project, Task, User } from "@prisma/client";

export class ProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.ProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindManyArgs>
  ): Promise<Project[]> {
    return this.prisma.project.findMany(args);
  }
  async findOne<T extends Prisma.ProjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindUniqueArgs>
  ): Promise<Project | null> {
    return this.prisma.project.findUnique(args);
  }
  async create<T extends Prisma.ProjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectCreateArgs>
  ): Promise<Project> {
    return this.prisma.project.create<T>(args);
  }
  async update<T extends Prisma.ProjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectUpdateArgs>
  ): Promise<Project> {
    return this.prisma.project.update<T>(args);
  }
  async delete<T extends Prisma.ProjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectDeleteArgs>
  ): Promise<Project> {
    return this.prisma.project.delete(args);
  }

  async findTasks(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .tasks(args);
  }

  async getOwner(parentId: string): Promise<User | null> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .owner();
  }
}
