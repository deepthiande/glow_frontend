import axios from 'axios';
import { products, categories, reviews } from '../data/products';

// Configure base Axios instance ready for Django REST Framework
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Attach auth token if available for Django JWT/Token Auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('glow_glam_auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Service Layer:
 * Automatically uses Django API when available, otherwise falls back gracefully
 * to realistic local mock data.
 */
export const productService = {
  // Get all products with optional filters
  async getProducts(params = {}) {
    try {
      const response = await api.get('/products/', { params });
      return response.data;
    } catch {
      // Return filtered mock data
      let result = [...products];

      if (params.category && params.category !== 'all') {
        result = result.filter(
          (p) => p.categorySlug.toLowerCase() === params.category.toLowerCase()
        );
      }

      if (params.search) {
        const query = params.search.toLowerCase();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
      }

      if (params.minPrice) {
        result = result.filter((p) => p.price >= Number(params.minPrice));
      }

      if (params.maxPrice) {
        result = result.filter((p) => p.price <= Number(params.maxPrice));
      }

      if (params.rating) {
        result = result.filter((p) => p.rating >= Number(params.rating));
      }

      if (params.sortBy) {
        if (params.sortBy === 'price-low-high') {
          result.sort((a, b) => a.price - b.price);
        } else if (params.sortBy === 'price-high-low') {
          result.sort((a, b) => b.price - a.price);
        } else if (params.sortBy === 'rating') {
          result.sort((a, b) => b.rating - a.rating);
        } else if (params.sortBy === 'newest') {
          result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        }
      }

      return result;
    }
  },

  // Get single product by ID
  async getProductById(id) {
    try {
      const response = await api.get(`/products/${id}/`);
      return response.data;
    } catch {
      return products.find((p) => p.id === id) || null;
    }
  },

  // Get categories
  async getCategories() {
    try {
      const response = await api.get('/categories/');
      return response.data;
    } catch {
      return categories;
    }
  },

  // Get reviews
  async getReviews() {
    try {
      const response = await api.get('/reviews/');
      return response.data;
    } catch {
      return reviews;
    }
  }
};

export default api;
