import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useQuery } from 'graphql-hooks';

import LayoutUserPublic from '../../components/layouts/user-public';
import LayoutContainer  from '../../components/layouts/layout-container';
import AtomTitle        from '../../components/atoms/title';
import AtomSectionBody  from '../../components/atoms/section-body';


const GET_POST_AUTHOR = (id) => {
  return ` query {
    post(id: ${id}) {
      user {
        id
        name
        username
      }
    }
  }
`};
  
const PostDetail = (props) => {
  const { loading, error, data } = useQuery(GET_POST_AUTHOR(props.id), {});

  if (loading && !data) return 'Loading...'
  if (error) return 'Something Bad Happened'
  
  const body = 'BLOG. is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const size = {
    xs:24,
    sm:24,
    md:18,
    lg:18,
    xl:16
  };
	return (
    <LayoutContainer title={props.title}>
      <LayoutUserPublic title=''>
        <Row justify='center' className="mt5">
          <Col {...size}>
            <AtomTitle title={`${props.title}` || 'Long Title of The Post'} />
          </Col>
        </Row>

        <Row 
          justify='center'
          className='mt2 mb3'
        >
          <Col {...size}>
            <div className="flex flex-column">
              <Link className='playfair-display mb3 tc fw6'>
                <span className='author-link'>{`by: ${data.post.user.name}` || 'Anonim'}</span>
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
            {props.body}
          </AtomSectionBody>
        </Row>
      </LayoutUserPublic>
    </LayoutContainer>
	);
};

export default PostDetail;
