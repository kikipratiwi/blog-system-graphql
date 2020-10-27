export const postQuery = {
	GET_POST: (id) => { 
		return `query {
			post(id: ${id}) {
				id
				title
				body
			}
		}`},
	GET_POSTS: ` 
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
		}`,
	GET_USER_POSTS: (id) => {
		return `query {
			user(id: ${id}) {
				posts {
					data {
						id
						title
						body
					}
				}
			}
		}`}
};

export const postMutation = {
	CREATE_POST: ` 
		mutation (
			$input: CreatePostInput!
		) {
			createPost(input: $input) {
				id
				title
				body
			}
		}`,
	UPDATE_POST: `
		mutation (
			$id: ID!,
			$input: UpdatePostInput!
		) {
			updatePost(id: $id, input: $input) {
				id
				title
				body
			}
		}`,
	DELETE_POST: `
		mutation (
			$id: ID!
		) {
			deletePost(id: $id)
		}`
}

export const postParams = {
	GET_POSTS: (page = 1, limit = 7) => {
		return {
			variables: {
				'options': {
					'paginate': {
						'page': page,
						'limit': limit
					}
				}
			}
		}},
	CREATE_POST: (title, body) => {
		return {
			variables: {
			'input': {
				'title': title,
				'body': body
			}
		}
	}},
	UPDATE_POST: (id, title, body) => {
		return {
			variables: {
				'id': id,
				'input': {
					'title': title,
					'body': body
				}
		}
	}},
	DELETE_POST: (id) => {
		return	 {
			variables: {
			'id': id
		}
	}},
};

export default { postQuery, postMutation, postParams };