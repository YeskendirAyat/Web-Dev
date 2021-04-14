from django.contrib import admin

# Register your models here.
from api.models import Company,Vacancy

@admin.register(Vacancy)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'salary', 'company',)
    search_fields = ('name', 'salary',)
    list_filter = ('company',)
    
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address',)
    search_fields = ('name', 'city',)