from django.http.response import JsonResponse

from api.models import Product,Category


def product_list(request):
    products = Product.objects.all()
    products_json = [i.to_json() for i in products]
    return JsonResponse(products_json,safe=False)
def product_detail(request,product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    return JsonResponse(product.to_json( ))
def category_list(request):
    category = Category.objects.all()
    category_json = [i.to_json() for i in category]
    return JsonResponse(category_json,safe=False)

def category_detail(request,category_id):
    try:
         category = Category.objects.get(id = category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    return JsonResponse(category.to_json( ))