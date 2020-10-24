import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import LayoutPostDetail from '../../components/layouts/post-detail';
import AtomTitle        from '../../components/atoms/title';
import AtomSectionBody  from '../../components/atoms/section-body';

const PostDetail = (props) => {
  const body = 'BLOG. is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const size = {
    xs:24,
    sm:24,
    md:18,
    lg:18,
    xl:16
  };
	return (
		<LayoutPostDetail>
      <Row justify='center'>
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
              <span className='author-link'>{`by: ${props.username}` || 'Anonim'}</span>
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
          {body}
        </AtomSectionBody>
      </Row>
		</LayoutPostDetail>
	);
};

export default PostDetail;
