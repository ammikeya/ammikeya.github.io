import Theme, { LinkCard } from 'rspress/theme';

import { usePageData } from 'rspress/runtime';

// 定制 Home 页面
const HomeLayout = () => {
	const pageData = usePageData();

	console.log('pageData', pageData)
	const { siteData } = pageData;
	const { pages = [] } = siteData || {}
	const filterPages = pages.filter(item => item.title).filter(item => item.routePath.includes('/guide/')).sort((a, b) => b?.lastUpdatedTime?.localeCompare(a?.lastUpdatedTime))
  return (
    <div className='p-8 max-w-3xl mx-auto'>
      {filterPages.map((item, index) => {
				return (
					<div 
						className='p-4'
						title={item.title} 
						key={item.routePath}
					>
						<a className='font-normal text-lg' href={item.routePath}>
							{item.title}
						</a>
						<div className='text-sm text-gray-400'>
							{item.lastUpdatedTime}
						</div>
						<div className='text-gray-500'>
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