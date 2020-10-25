import React from 'react';
import { Form, Input } from 'antd';

const AtomTextArea = (props) => {
	return (
		<Form.Item
			name={props.name}
			noStyle
			rules={[
				{
					message: 'The field cannot be empty',
					required: true,
					type: 'string'
				},
			]}
		>
			<Input.TextArea
        autoSize={true}
        bordered={false}
				placeholder={props.placeholder || 'Placeholder'}
				style={{
          padding: 0,
          resize: 'none',
          ...props.style
        }}
        className={props.fontFamily}
			/>
		</Form.Item>
	);
};

export default AtomTextArea;
