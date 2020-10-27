import React, { useState } from 'react';
import { useMutation, useManualQuery } from 'graphql-hooks';
import { Row, Col, Button, Space, Form, message } from 'antd';
import { useHistory } from 'react-router-dom';

import LayoutContainer from '../../../components/layouts/layout-container';
import LayoutAdmin from '../../../components/layouts/admin-dashboard';
import AtomTextArea from '../../../components/atoms/inputs/textarea';

import { postMutation, postParams } from '../../../services/post';
import { toTitleCase } from '../../../utils/post';

const PostForm = (props) => {
  const history = useHistory();
  
  const size = {
    xs:24,
    sm:24,
    md:18,
    lg:18,
    xl:16
  };

  let post = props.location.post || {};
  let isNew = !post? true : false 

  const [updatePost, { error:updateError, data:updateData }] = useManualQuery(postMutation.UPDATE_POST);
  const [createPost, { error:createError, data:createData }] = useManualQuery(postMutation.CREATE_POST);
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState(toTitleCase(post.title));
  const [newBody, setNewBody] = useState(post.body);

  const publish = async () => {
    await createPost(postParams.CREATE_POST(newTitle, newBody));
    setIsCreating(true);
    message.success('Post successfully published');
    
    setTimeout(() => { 
        history.push(`/post/10`);
    }, 2000);
    
    if (createError) {
      setIsCreating(false);

      createError.error.errors.map((err, idx) => {
        return message.error(`${idx}: ${err.message}`);
      })
    }
  }

  const update = async () => {
    await updatePost(postParams.UPDATE_POST(post.id, newTitle, newBody));
    setIsCreating(true);
    message.success('Post successfully updated');

    setTimeout(() => {
      history.push(`/post/${post.id}`);
    }, 2000);

    if (updateError) {
      setIsCreating(false);

      updateError.error.errors.map((err, idx) => {
        return message.error(`${idx}: ${err.message}`);
      })
    }
  }

  const cancel = () => {
    history.push(`/admin/`);
  }

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

	return (
    <LayoutContainer title=''>
      <LayoutAdmin actionBar={ () => (
        <Space>
          <Button 
            type='link' 
            className='btn-default mv3' 
            onClick={()=> {cancel()}}
          >
            {isNew? 'Discard' : 'Cancel'}
          </Button>
          
          <Button 
            className='btn-default mv3'
            loading={isCreating}
            onClick={()=> {isNew? publish() : update()}} 
          >
            {isNew? 'Publish' : 'Update'}
          </Button>
        </Space>
      )}>
      
        <Form
          name='post'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row justify='center' className='mb4'>
            <Col {...size}>
              <AtomTextArea
                name='title'
                value={newTitle}
                onChange={e => setNewTitle(e)}
                placeholder='Add title'
                style={{
                  color: 'rgba(0, 0, 0, 0.85)',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: 1.35,
                }}
                fontFamily='playfair-display' />
            </Col>
          </Row>

          <Row justify='center'>
            <Col {...size}>
              <AtomTextArea
                name='body'
                value={newBody}
                onChange={e => setNewBody(e)}
                placeholder='Start writing... '
                style={{
                  color: '#202124bd',
                  fontWeight: 400,
                  lineHeight: 1.8
                }} />
            </Col>
          </Row>
        </Form>
      </LayoutAdmin>
    </LayoutContainer>
	);
};

export default PostForm;
