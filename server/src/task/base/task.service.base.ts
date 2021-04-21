import { PrismaService } from "nestjs-prisma";
import { Prisma, Task, User, Project } from "@prisma/client";

export class TaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.TaskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskFindManyArgs>
  ): Promise<Task[]> {
    return this.prisma.task.findMany(args);
  }
  async findOne<T extends Prisma.TaskFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskFindUniqueArgs>
  ): Promise<Task | null> {
    return this.prisma.task.findUnique(args);
  }
  async create<T extends Prisma.TaskCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskCreateArgs>
  ): Promise<Task> {
    return this.prisma.task.create<T>(args);
  }
  async update<T extends Prisma.TaskUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUpdateArgs>
  ): Promise<Task> {
    return this.prisma.task.update<T>(args);
  }
  async delete<T extends Prisma.TaskDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskDeleteArgs>
  ): Promise<Task> {
    return this.prisma.task.delete(args);
  }

  async getAssignedTo(parentId: string): Promise<User | null> {
    return this.prisma.task
      .findUnique({
        where: { id: parentId },
      })
      .assignedTo();
  }

  async getProject(parentId: string): Promise<Project | null> {
    return this.prisma.task
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
}
