import { useParams, Navigate, Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getCategoryBySlug } from '@/data/menuData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

// Category-specific items per page
const getItemsPerPage = (slug: string): number => {
  if (slug === 'vegan-sorbet') return 11;
  return 27; // Default for ice-cream-flavours and others
};

const MenuCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  
  const categoryData = category ? getCategoryBySlug(category) : undefined;

  // Sync currentPage with URL param
  useEffect(() => {
    const pageParam = parseInt(searchParams.get('page') || '1', 10);
    if (pageParam !== currentPage) {
      setCurrentPage(pageParam);
    }
  }, [searchParams, currentPage]);

  // If category not found, redirect to 404
  if (!categoryData) {
    return <Navigate to="/404" replace />;
  }

  // Calculate pagination with category-specific items per page
  const ITEMS_PER_PAGE = getItemsPerPage(categoryData.slug);
  const totalPages = Math.ceil(categoryData.items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = categoryData.items.slice(startIndex, endIndex);

  // Show pagination for Ice Cream Flavours and Vegan/Sorbet categories
  const showPagination = (categoryData.slug === 'ice-cream-flavours' || categoryData.slug === 'vegan-sorbet') && totalPages > 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    // Scroll to top of the grid smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F7F2EC]">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            to="/#creations" 
            className="inline-flex items-center gap-2 text-[#6B5E52] hover:text-[#3D3127] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-light">Back to Menu</span>
          </Link>

          {/* Category Header */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A18A6F] mb-4 font-light">
              OUR MENU
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3127] mb-6 tracking-tight font-medium">
              {categoryData.name}
            </h1>
            {categoryData.description && (
              <p className="text-base md:text-lg text-[#6B5E52] leading-relaxed font-light max-w-2xl mx-auto">
                {categoryData.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Ice Cream Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {currentItems.map((item, index) => (
              <div
                key={item.name}
                className="ice-cream-item"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="ice-cream-image w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Ice Cream Name */}
                <h3 className="font-serif text-lg md:text-xl text-[#3D3127] text-center font-medium mb-2">
                  {item.name}
                </h3>

                {/* Description (if exists, e.g., for sandwiches) */}
                {item.description && (
                  <p className="text-sm md:text-base text-[#6B5E52] leading-relaxed font-light text-center px-2">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          {showPagination && (
            <div className="flex justify-center items-center gap-3 mt-12 md:mt-16">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`
                    w-10 h-10 rounded-full font-medium text-base
                    transition-all duration-300
                    ${
                      currentPage === page
                        ? 'bg-[#3D3127] text-[#F7F2EC] shadow-lg scale-110'
                        : 'bg-white text-[#6B5E52] hover:bg-[#3D3127] hover:text-[#F7F2EC] hover:scale-105'
                    }
                  `}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>
          )}

          {/* Empty State */}
          {categoryData.items.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B5E52] text-lg font-light">
                No items available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ice-cream-image {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .ice-cream-item:hover .ice-cream-image {
            transform: scale(1.02);
          }

          .ice-cream-item:hover {
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .ice-cream-image {
            transition: none;
          }

          .ice-cream-item:hover .ice-cream-image {
            transform: none;
          }

          .ice-cream-item:hover {
            filter: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuCategory;
