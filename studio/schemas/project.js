export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'description',
			type: 'text',
		},
		{
			name: 'yarnType',
			title: 'Yarn Used',
			type: 'string',
		},
		{
			name: 'hookSize',
			title: 'Hook Size',
			type: 'string',
		},
		{
			name: 'url',
			title: 'URL Link to Pattern (if one)',
			type: 'url',
		},
		{
			name: 'projectType',
			title: 'Project Type',
			type: 'string',
			options: {
				list: [
					{value: 'personal', title: 'Personal'},
					{value: 'client', title: 'Client'},
				],
			},
		},
		{
			name: 'projectImage',
			title: 'Project images',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alt',
						},
					],
					options: {
						hotspot: true,
					},
				},
			],
		},

		{
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
			options: {
				layout: 'tags',
			},
		},
	],
};
