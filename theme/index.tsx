import Theme, { LinkCard } from 'rspress/theme';

import { usePageData } from 'rspress/runtime';

// 定制 Home 页面
const HomeLayout = () => {
	const pageData = usePageData();

	console.log('pageData', pageData)
	const { siteData } = pageData;
	const { pages = [] } = siteData || {}
  return (
    <div style={{ padding: '2rem 8rem'	}}>
      {pages.map(item => {
				return (
					<div 
						style={{ marginBottom: '0rem', padding: '1rem' }} 
						title={item.title} 
						key={item.routePath}
						className='link-card'
					>
						<a href={item.routePath} className='link-card-title'>
							{item.title}
						</a>
						<div style={{ fontSize: '16px', color: '#a1a1aa' }}>
							{item.lastUpdatedTime}
						</div>
						<div style={{ fontSize: '16px', color: '#71717a' }}>
							{item.frontmatter.description || ''}
						</div>
					</div>
				)
			})}
    </div>
  );
};

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from 'rspress/theme';