interface Developer {
  id: number;
  name: string;
  skills: string[];
}

interface Startup {
  id: number;
  name: string;
  requiredSkills: string[];
}

export function matchDeveloperToStartup(developer: Developer, startup: Startup): number {
  const matchedSkills = developer.skills.filter(skill => startup.requiredSkills.includes(skill));
  const matchPercentage = (matchedSkills.length / startup.requiredSkills.length) * 100;
  return Math.round(matchPercentage);
}

export function findBestMatches(developers: Developer[], startup: Startup, limit: number = 5): Developer[] {
  const rankedDevelopers = developers
    .map(dev => ({
      ...dev,
      matchPercentage: matchDeveloperToStartup(dev, startup)
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage);

  return rankedDevelopers.slice(0, limit);
}

