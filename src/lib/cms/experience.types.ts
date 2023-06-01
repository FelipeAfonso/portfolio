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
	icon?: {
		url: string;
	};
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
      icon {
        url(
          transformation: {
            document: { output: { format: webp }}
          }
        )
      }
      tools {
        name
        description
        logo {
          alt
          url(
            transformation: {
              image: { resize: { height: 24, width: 24 }}, 
              document: { output: { format: webp }}
            }
          )
        }
      }
    }
  }
`;
