import { HttpError } from 'wasp/server'

export const getDevotional = async ({ day }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const devotional = await context.entities.Devotional.findUnique({
    where: { day }
  });

  if (!devotional) throw new HttpError(404, 'No devotional found for day ' + day);

  return devotional;
}

export const getUserProgress = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Progress.findMany({
    where: { userId: context.user.id }
  });
}
