export type Tool = {
	name: string;
	description: string;
	logo: {
		alt: string;
		url: string;
	};
};

export type Experience = {
	description: string;
	slug: string;
	category: string;
	endDate: string;
	startDate: string;
	title: string;
	organization: string;
	organizationLink: string;
	location: string;
	tools: Tool[];
};

export const getAllExperiencesQuery = `
  query {
    experiences(orderBy: startDate_DESC) {
      description
      category
      slug
      endDate
      startDate
      title
      organization
      organizationLink
      location
      tools {
        name
        description
        logo {
          alt
          url(
            transformation: {image: {resize: {height: 24, width: 24
              }
            }, document: {output: {format: webp
              }
            }
          }
          )
        }
      }
    }
  }
`;
