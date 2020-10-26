import React from 'react';
import reqwest from 'reqwest';
import { Link } from 'react-router-dom';

import { ReloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import { List, Button, Skeleton } from 'antd';

import LayoutContainer from '../../components/layouts/layout-container';
import LayoutAdmin from '../../components/layouts/admin-dashboard';
import AtomSectionBody from '../../components/atoms/section-body';

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class AdminPage extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  confirmed = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };

  canceled = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  
  render() {
    const sectionBodySize = {
      xs:20,
      sm:20,
      md:20,
      lg:20,
      xl:20
    };
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div className='tc mv3'>
          <Button onClick={this.onLoadMore} icon={<ReloadOutlined />} className='btn-default mv3'>loading more</Button>
        </div>
      ) : null;

    return ( 
      <LayoutContainer title=''>
        <LayoutAdmin actionBar={ () => (
          <Button onClick={console.log('Write button clicked')} icon={<PlusOutlined />} className='btn-default mv3'>Write</Button>
        )}>
          <List
            className='demo-loadmore-list'
            loading={initLoading}
            itemLayout='horizontal'
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[
                  <a className='author-link' key='list-loadmore-edit'>edit</a>, 
                  <Popconfirm
                    title='Are you sure delete this post?'
                    onConfirm={this.confirmed}
                    onCancel={this.canceled}
                    okText='Yes'
                    cancelText='No'
                  >
                    <a className='author-link' key='list-loadmore-more'>delete</a>
                  </Popconfirm>
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={item.name.last}
                    description={
                      <AtomSectionBody size={sectionBodySize} >
                        This is dummy blog summary...
                      </AtomSectionBody>
                    }
                  />
                  <Link className='read-btn fw6'>
                    View
                  </Link>
                </Skeleton>
              </List.Item>
            )}
          />
        </LayoutAdmin>
      </LayoutContainer>
    );
  }
};

export default AdminPage;
