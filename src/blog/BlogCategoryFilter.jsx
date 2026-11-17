import React from 'react';

export default function BlogCategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  totalCount
}) {
  return (
    <nav 
      aria-label="Story categories" 
      className="border-b border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#070E18] sticky top-16 sm:top-20 z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-[#070E18] ${
                  isSelected
                    ? 'bg-blue-600 dark:bg-blue-600 text-white shadow-sm font-semibold'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200/60 dark:border-white/5'
                }`}
              >
                <span>{category.name}</span>
                {category.count !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {category.id === 'all' ? totalCount : category.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
