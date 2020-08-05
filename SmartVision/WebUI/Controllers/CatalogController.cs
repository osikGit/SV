using Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebUI.Controllers
{
    public class CatalogController : Controller
    {
        private IProductRepository repository;
        public CatalogController(IProductRepository repo)
        {
            repository = repo;
        }

        public ViewResult View()
        {
            return View(repository.Products);
        }
    }
}