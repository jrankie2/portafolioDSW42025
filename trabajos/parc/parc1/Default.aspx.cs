using System;
using System.Collections.Generic;
using System.Web.UI;

namespace CELWebsite
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Establecer el año actual
                lblAnoActual.Text = DateTime.Now.Year.ToString();
                
                // Cargar noticias
                LoadNews();
                
                // Cargar estadísticas
                LoadStatistics();
                
                // Configurar navegación activa
                SetActiveNavigation();
            }
        }
        
        private void LoadNews()
        {
            // Simular datos de noticias
            var news = new List<object>
            {
                new { Fecha = DateTime.Now.AddDays(-2), Titulo = "Nuevo Programa de Inglés Intensivo", Descripcion = "Lanzamos nuestro programa de inglés intensivo de 4 semanas para estudiantes que necesitan resultados rápidos." },
                new { Fecha = DateTime.Now.AddDays(-5), Titulo = "Certificación TOEFL Disponible", Descripcion = "Ahora ofrecemos preparación y certificación oficial TOEFL en nuestras instalaciones." },
                new { Fecha = DateTime.Now.AddDays(-7), Titulo = "Clases Virtuales Mejoradas", Descripcion = "Hemos actualizado nuestra plataforma virtual con nuevas funcionalidades interactivas." },
                new { Fecha = DateTime.Now.AddDays(-10), Titulo = "Descuento Especial de Temporada", Descripcion = "Aprovecha nuestro descuento del 20% en todos los cursos durante esta temporada." }
            };
            
            rptNews.DataSource = news;
            rptNews.DataBind();
        }
        
        private void LoadStatistics()
        {
            // Simular estadísticas dinámicas
            lblEstudiantes.Text = "2,500+";
            lblAnos.Text = "15";
            lblIdiomas.Text = "6";
            lblAprobacion.Text = "95%";
        }
        
        private void SetActiveNavigation()
        {
            // Marcar la página actual como activa
            lnkInicio.CssClass = "nav-link active";
        }
        
        protected void Page_PreRender(object sender, EventArgs e)
        {
            // Configuraciones adicionales antes del renderizado
            SetPageTitle();
            SetMetaTags();
        }
        
        private void SetPageTitle()
        {
            Page.Title = "Centro Especializado en Lenguas (CEL) - Aprende Idiomas con Excelencia";
        }
        
        private void SetMetaTags()
        {
            // Agregar meta tags para SEO
            HtmlMeta metaDescription = new HtmlMeta();
            metaDescription.Name = "description";
            metaDescription.Content = "Centro Especializado en Lenguas (CEL) - Aprende inglés, francés, alemán, italiano, portugués y japonés con profesores certificados y metodologías innovadoras.";
            Page.Header.Controls.Add(metaDescription);
            
            HtmlMeta metaKeywords = new HtmlMeta();
            metaKeywords.Name = "keywords";
            metaKeywords.Content = "cursos de idiomas, inglés, francés, alemán, italiano, portugués, japonés, certificaciones internacionales, Bogotá, Colombia";
            Page.Header.Controls.Add(metaKeywords);
        }
    }
}
