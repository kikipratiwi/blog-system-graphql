const HOMEPAGE_QUERY = `
	query (
		$options: PageQueryOptions
	) {
		posts(options: $options) {
			data {
				id
				title
				body
			}
			meta {
				totalCount
			}
		}
	}`;

export default HOMEPAGE_QUERY;