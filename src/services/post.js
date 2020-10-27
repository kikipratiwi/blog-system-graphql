export const postQuery = {
	GET_POST: (id) => { 
		return `query {
			post(id: ${id}) {
				id
				title
				body
			}
		}`},
		GET_USER: (id) => { 
			return `query {
				user(id: ${id}) {
					id
					name
					username
				}
			}`},
		GET_POST_AUTHOR: (id) => { 
			return `query {
				post(id: ${id}) {
					id
					title
					body
					user {
						id
						name
						username
					}
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
		return `query  (
				$options: PageQueryOptions
			) {
				user(id: ${id}) {
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
	GET_POSTS: (page = 0, limit = 0) => {
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