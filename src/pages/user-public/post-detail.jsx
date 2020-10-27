import React from 'react';
import { useQuery } from 'graphql-hooks';
import { Row, Col } from 'antd';
import { Link, useParams } from 'react-router-dom';

import AtomSectionBody from '../../components/atoms/section-body';
import AtomTitle from '../../components/atoms/title';
import LayoutContainer from '../../components/layouts/layout-container';
import LayoutUserPublic from '../../components/layouts/user-public';

import { postQuery } from '../../services/post';
import { toTitleCase } from '../../utils/post';
 
const PostDetail = (props) => {
  const { postId } = useParams();

  const { loading, error, data } = useQuery(postQuery.GET_POST_AUTHOR(postId), {});

  if (loading && !data) return ''
  if (error) return 'Something Bad Happened'
  
  const size = {
    xs:24,
    sm:24,
    md:18,
    lg:18,
    xl:16
  };

	return (
    <LayoutContainer title={toTitleCase(data.post.title)}>
      <LayoutUserPublic title=''>
        <Row justify='center' className="mt5">
          <Col {...size}>
            <AtomTitle title={toTitleCase(data.post.title)} />
          </Col>
        </Row>

        <Row 
          justify='center'
          className='mt2 mb3'
        >
          <Col {...size}>
            <div className="flex flex-column">
              <Link 
                to={`/${data.post.user.id}/posts`} 
                className='playfair-display mb3 tc fw6 f5'
              >
                <span className='author-link'>{`by: ${data.post.user.name}`}</span>
              </Link>
              <hr 
                className='mv3 border-gray'
                style={{
                  width:'50px',
                  borderWidth: 1
                }}
              />
            </div>
          </Col>
        </Row>

        <Row 
          justify='center'
          className='mv3'
        >
          <AtomSectionBody size={size}>
            {data.post.body}
          </AtomSectionBody>
        </Row>
      </LayoutUserPublic>
    </LayoutContainer>
	);
};

export default PostDetail;
