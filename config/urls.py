"""
URL configuration for config project.
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # Serve frontend HTML pages
    path('', TemplateView.as_view(template_name='index.html'), name='home'),

    # Guest pages
    path('pages/guest/catalog/', TemplateView.as_view(template_name='pages/guest/catalog.html')),
    path('pages/guest/product-detail/', TemplateView.as_view(template_name='pages/guest/product-detail.html')),
    path('pages/guest/categories/', TemplateView.as_view(template_name='pages/guest/categories.html')),
    path('pages/guest/search/', TemplateView.as_view(template_name='pages/guest/search.html')),
    path('pages/guest/about/', TemplateView.as_view(template_name='pages/guest/about.html')),
    path('pages/guest/contact/', TemplateView.as_view(template_name='pages/guest/contact.html')),
    path('pages/guest/login/', TemplateView.as_view(template_name='pages/guest/login.html')),
    path('pages/guest/register/', TemplateView.as_view(template_name='pages/guest/register.html')),

    # Customer pages
    path('pages/customer/dashboard/', TemplateView.as_view(template_name='pages/customer/dashboard.html')),
    path('pages/customer/profile/', TemplateView.as_view(template_name='pages/customer/profile.html')),
    path('pages/customer/cart/', TemplateView.as_view(template_name='pages/customer/cart.html')),
    path('pages/customer/checkout/', TemplateView.as_view(template_name='pages/customer/checkout.html')),
    path('pages/customer/orders/', TemplateView.as_view(template_name='pages/customer/orders.html')),
    path('pages/customer/order-detail/', TemplateView.as_view(template_name='pages/customer/order-detail.html')),
    path('pages/customer/order-tracking/', TemplateView.as_view(template_name='pages/customer/order-tracking.html')),

    # Admin pages
    path('pages/admin/dashboard/', TemplateView.as_view(template_name='pages/admin/dashboard.html')),
    path('pages/admin/products/', TemplateView.as_view(template_name='pages/admin/products.html')),
    path('pages/admin/add-product/', TemplateView.as_view(template_name='pages/admin/add-product.html')),
    path('pages/admin/edit-product/', TemplateView.as_view(template_name='pages/admin/edit-product.html')),
    path('pages/admin/categories/', TemplateView.as_view(template_name='pages/admin/categories.html')),
    path('pages/admin/inventory/', TemplateView.as_view(template_name='pages/admin/inventory.html')),
    path('pages/admin/orders/', TemplateView.as_view(template_name='pages/admin/orders.html')),
    path('pages/admin/order-detail/', TemplateView.as_view(template_name='pages/admin/order-detail.html')),
    path('pages/admin/customers/', TemplateView.as_view(template_name='pages/admin/customers.html')),
    path('pages/admin/reports/', TemplateView.as_view(template_name='pages/admin/reports.html')),
    path('pages/admin/admin-profile/', TemplateView.as_view(template_name='pages/admin/admin-profile.html')),

    # Prototype navigator
    path('readme/', TemplateView.as_view(template_name='README.html')),
] + static(settings.STATIC_URL, document_root=settings.BASE_DIR / 'frontend')
