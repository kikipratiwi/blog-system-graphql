import React, { useState, useEffect} from 'react';
import { useMutation } from 'graphql-hooks'
import { Row, Col, Button, Space, Form, message } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import LayoutContainer  from '../../../components/layouts/layout-container';
import LayoutAdmin      from '../../../components/layouts/admin-dashboard';
import AtomTextArea     from '../../../components/atoms/inputs/textarea';

import { postMutation, postParams } from '../../../services/post';

const PostForm = (props) => {
  const history = useHistory();
  const { postId } = useParams();

  const size = {
    xs:24,
    sm:24,
    md:18,
    lg:18,
    xl:16
  };

  // const [updatePost] = useMutation(postMutation.UPDATE_POST);
  const [updatePost, { loading:updateLoading, error:updateError, data:updateData }] = useMutation(postMutation.UPDATE_POST);
  const [createPost, { loading:createLoading, error:createError, data:createData }] = useMutation(postMutation.CREATE_POST);
  // const [createPost] = useMutation(postMutation.CREATE_POST);
	const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newBody, setNewBody] = useState(props.body);

  const publish = () => {
    console.log('publish button clicked'+newTitle+newBody);
    createPost(postParams.CREATE_POST(newTitle, newBody));

    if (createData) {
      setIsCreating(true);

      message.success('Post successfully published');
      
      setTimeout(() => {
				history.push(`/post/${createData.createPost.id}`);
			}, 2000);
    } else if (createError) {
      setIsCreating(false);

      createError.error.errors.map((err, idx) => {
        return message.error(`${idx}: ${err.message}`);
      })
    }
  }

  const update = () => {
    console.log('update button clicked'+newTitle+newBody);
    updatePost(postParams.UPDATE_POST(props.id, newTitle, newBody));
    
    if (updateData) {
      setIsCreating(true);

      message.success('Post successfully updated');
      
      setTimeout(() => {
				history.push(`/post/${updateData.updatePost.id}`);
			}, 2000);
    } else if (updateError) {
      setIsCreating(false);

      updateError.error.errors.map((err, idx) => {
        return message.error(`${idx}: ${err.message}`);
      })
    }
  }

  const cancel = () => {
    console.log('cancel button clicked');

    setTimeout(() => {
      history.push(`/admin/`);
    }, 2000);
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
            onClick={cancel}
          >
            {props.isNew? 'Discard' : 'Cancel'}
          </Button>
          
          <Button 
            className='btn-default mv3'
            loading={isCreating}
            onClick={()=> {props.isNew? publish() : update()}} 
            htmlType='submit'
          >
            {props.isNew? 'Publish' : 'Update'}
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
