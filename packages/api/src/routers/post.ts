/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */

import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { t } from '../createRouter';

export const postRouter = t.router({
  // create
  add: t.procedure
    .input(
      z.object({
        id: z.string().uuid().optional(),
        title: z.string().min(1).max(32),
        text: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.prisma.post.create({
        data: input,
      });
      return todo;
    }),
  // read
  all: t.procedure.query(({ ctx }) => {
    /**
     * For pagination you can have a look at this docs site
     * @link https://trpc.io/docs/useInfiniteQuery
     */
    return ctx.prisma.post.findMany({
      select: {
        id: true,
        title: true,
      },
    });
  }),
  byId: t.procedure.input(z.string()).query(async ({ ctx, input }) => {
    const post = await ctx.prisma.post.findUnique({
      where: { id: input },
    });
    if (!post) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No post with id '${input}'`,
      });
    }
    return post;
  }),
  // update
  edit: t.procedure
    .input(
      z.object({
        id: z.string().uuid(),
        data: z.object({
          title: z.string().min(1).max(32).optional(),
          text: z.string().min(1).optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, data } = input;
      const todo = await ctx.prisma.post.update({
        where: { id },
        data,
      });
      return todo;
    }),
  // delete
  delete: t.procedure
    .input(z.string().uuid())
    .mutation(async ({ input: id, ctx }) => {
      await ctx.prisma.post.delete({ where: { id } });
      return id;
    }),
});
