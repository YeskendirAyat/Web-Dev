from django.http.response import JsonResponse
from api.models import Company,Vacancy

def company_list(request):
    companies=Company.objects.all()
    companies_json= [company.to_json() for company in companies]
    return JsonResponse(companies_json,safe=False)
     
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.to_json())
    
     
def company_vacancies(request, company_id):
    try:
        _company = Company.objects.get(id=company_id)
        vacancies=Vacancy.objects.filter(company=_company)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)


    vacancies_json= [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json,safe=False)
    # return JsonResponse(vacancies.to_json())

def vacancy_list(request):
    vacancies=Vacancy.objects.all()
    vacancies_json= [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json,safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())

def vacancy_Top10(request):
    try:
        vacancies = Vacancy.objects.order_by('-id')[:10]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    vacancies_json= [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json,safe=False)