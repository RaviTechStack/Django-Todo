from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import todo

# Create your views here.
def index(request):
    todoData = todo.objects.all()
    params = {
        "alldata" : todoData,
    }
    return render(request, "index.html", params)

def addtodo(request):
    if request.method == "POST":
        content = request.POST.get("content")
        add_todo = todo(todoContent = content)
        add_todo.save()
        return redirect("/")
    return render(request, "index.html")

def update(request, id):
    all_data = todo.objects.all()
    change_data = todo.objects.get(todoId = id)
    if request.method == "POST":
        change_data.todoContent = request.POST.get("content")
        change_data.save()
        return redirect("/")
    params = {
        "alldata" : all_data,
        "change_data" : change_data,
    }
    return render(request, "update.html", params)

def new_update(request, id):
    all_data = todo.objects.get(todoId = id)
    json_data = {
        "content" : all_data.todoContent
    }
    return JsonResponse(all_data)
    
def delete(request, id):
    del_data = todo.objects.get(todoId= id)
    del_data.delete()
    return redirect("/")

def adding(request):
    all_data  = todo.objects.all().values()
    return JsonResponse(list(all_data), safe= False)
