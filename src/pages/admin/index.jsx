/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Button, List, message, Popconfirm, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useQuery, useManualQuery } from 'graphql-hooks';

import AtomSectionBody from '../../components/atoms/section-body';
import LayoutAdmin from '../../components/layouts/admin-dashboard';
import LayoutContainer from '../../components/layouts/layout-container';

import { postSummary, toTitleCase } from '../../utils/post';
import { postQuery, postParams, postMutation } from '../../services/post';

const AdminPage = (props) => {
  const history = useHistory();

  const [deletePost, { data:deleteData }] = useManualQuery(postMutation.DELETE_POST);
  
	const sectionBodySize = {
		xs: 20,
		sm: 20,
		md: 20,
		lg: 20,
		xl: 20,
	};

  const { loading, error, data } = useQuery(
		postQuery.GET_USER_POSTS(props.id),
		postParams.GET_POSTS()
	)
  
  let posts

	if (!loading && data) {
		posts = data.user.posts.data;
	}
  
  if (loading && !data) return ''
	if (error) return 'Something Bad Happened'

	return (
		<LayoutContainer title="Dashboard">
			<LayoutAdmin
				actionBar={() => (
          <Button
            className="btn-default mv3"
            icon={<PlusOutlined />}
            onClick={() => {history.push(`/admin/post/new`);}}>
            Write
          </Button>
				)}
        {...props}>
				<List
					className="demo-loadmore-list"
					dataSource={posts}
					postLayout="horizontal"
					renderItem={(post) => (
						<List.Item
							actions={[
                <Link 
                  to={{
                    pathname: `/admin/post/${post.id}/edit`,
                    post: post
                  }}
                  className="author-link" 
                  key="list-loadmore-edit">
									edit
								</Link>,
								<Popconfirm
									cancelText="No"
									okText="Yes"
									onConfirm={
                    () => {
                      deletePost(postParams.DELETE_POST(post.id))
                      message.success(`Post successfully deleted`)
                      if (deleteData) console.log(deleteData)
                    }
                  }
									title="Are you sure delete this post?">
                  <Link
                    className="author-link" 
                    key="list-loadmore-more">
										delete
									</Link>
								</Popconfirm>,
							]}>
							<Skeleton avatar title={false} loading={post.loading} active>
								<List.Item.Meta
									title={toTitleCase(post.title)}
									description={
										<AtomSectionBody size={sectionBodySize}>
											{`${postSummary(post.body)}...`}
										</AtomSectionBody>
									}
								/>
								<Link to={`/post/${post.id}`} className="read-btn fw6">View</Link>
							</Skeleton>
						</List.Item>
					)}
				/>
			</LayoutAdmin>
		</LayoutContainer>
	);
};

export default AdminPage;
