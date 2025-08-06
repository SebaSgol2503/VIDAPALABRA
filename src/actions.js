import { HttpError } from 'wasp/server'

export const updateProgress = async ({ day, completed }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const progress = await context.entities.Progress.findFirst({
    where: { day, userId: context.user.id }
  });

  if (!progress) { throw new HttpError(404, "Progress not found for the specified day.") };

  return context.entities.Progress.update({
    where: { id: progress.id },
    data: { completed }
  });
}
