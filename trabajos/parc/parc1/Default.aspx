<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CELWebsite.Default" %>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centro Especializado en Lenguas (CEL) - ASP.NET</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <form id="form1" runat="server">
        <!-- Header y Navegación -->
        <header class="header">
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">
                        <h1><i class="fas fa-language"></i> CEL</h1>
                        <span>Centro Especializado en Lenguas</span>
                    </div>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkInicio" NavigateUrl="~/Default.aspx" runat="server" CssClass="nav-link active">Inicio</asp:HyperLink>
                        </li>
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkCursos" NavigateUrl="~/Cursos.aspx" runat="server" CssClass="nav-link">Cursos</asp:HyperLink>
                        </li>
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkServicios" NavigateUrl="~/Servicios.aspx" runat="server" CssClass="nav-link">Servicios</asp:HyperLink>
                        </li>
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkHorarios" NavigateUrl="~/Horarios.aspx" runat="server" CssClass="nav-link">Horarios</asp:HyperLink>
                        </li>
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkMision" NavigateUrl="~/Mision.aspx" runat="server" CssClass="nav-link">Misión</asp:HyperLink>
                        </li>
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkVision" NavigateUrl="~/Vision.aspx" runat="server" CssClass="nav-link">Visión</asp:HyperLink>
                        </li>
                        <li class="nav-item">
                            <asp:HyperLink ID="lnkContactos" NavigateUrl="~/Contactos.aspx" runat="server" CssClass="nav-link">Contactos</asp:HyperLink>
                        </li>
                    </ul>
                    <div class="nav-toggle">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title">Aprende Idiomas con Excelencia</h1>
                    <p class="hero-description">
                        En el Centro Especializado en Lenguas (CEL) ofrecemos programas de alta calidad 
                        para el aprendizaje de idiomas extranjeros con metodologías innovadoras y 
                        profesores altamente capacitados.
                    </p>
                    <div class="hero-buttons">
                        <asp:HyperLink ID="lnkVerCursos" NavigateUrl="~/Cursos.aspx" runat="server" CssClass="btn btn-primary">Ver Cursos</asp:HyperLink>
                        <asp:HyperLink ID="lnkContactanos" NavigateUrl="~/Contactos.aspx" runat="server" CssClass="btn btn-secondary">Contáctanos</asp:HyperLink>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="hero-graphic">
                        <i class="fas fa-globe-americas"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="container">
                <h2 class="section-title">¿Por qué elegir CEL?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </div>
                        <h3>Profesores Certificados</h3>
                        <p>Nuestros instructores cuentan con certificaciones internacionales y amplia experiencia en la enseñanza de idiomas.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>Grupos Reducidos</h3>
                        <p>Clases con máximo 12 estudiantes para garantizar atención personalizada y mejor aprendizaje.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h3>Certificaciones</h3>
                        <p>Otorgamos certificados reconocidos internacionalmente al completar nuestros programas.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <h3>Tecnología Moderna</h3>
                        <p>Utilizamos herramientas digitales y plataformas interactivas para mejorar la experiencia de aprendizaje.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Languages Section -->
        <section class="languages">
            <div class="container">
                <h2 class="section-title">Idiomas que Ofrecemos</h2>
                <div class="languages-grid">
                    <div class="language-card">
                        <div class="language-flag">🇺🇸</div>
                        <h3>Inglés</h3>
                        <p>Desde básico hasta avanzado</p>
                    </div>
                    <div class="language-card">
                        <div class="language-flag">🇫🇷</div>
                        <h3>Francés</h3>
                        <p>Programa completo de francés</p>
                    </div>
                    <div class="language-card">
                        <div class="language-flag">🇩🇪</div>
                        <h3>Alemán</h3>
                        <p>Curso estructurado de alemán</p>
                    </div>
                    <div class="language-card">
                        <div class="language-flag">🇮🇹</div>
                        <h3>Italiano</h3>
                        <p>Programa de italiano</p>
                    </div>
                    <div class="language-card">
                        <div class="language-flag">🇵🇹</div>
                        <h3>Portugués</h3>
                        <p>Curso de portugués brasileño</p>
                    </div>
                    <div class="language-card">
                        <div class="language-flag">🇯🇵</div>
                        <h3>Japonés</h3>
                        <p>Programa especializado</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Section -->
        <section class="news">
            <div class="container">
                <h2 class="section-title">Últimas Noticias</h2>
                <div class="news-grid">
                    <asp:Repeater ID="rptNews" runat="server">
                        <ItemTemplate>
                            <div class="news-item">
                                <div class="news-date">
                                    <asp:Label ID="lblFecha" runat="server" Text='<%# Eval("Fecha", "{0:dd MMM}") %>'></asp:Label>
                                </div>
                                <div class="news-content">
                                    <h4><asp:Label ID="lblTitulo" runat="server" Text='<%# Eval("Titulo") %>'></asp:Label></h4>
                                    <p><asp:Label ID="lblDescripcion" runat="server" Text='<%# Eval("Descripcion") %>'></asp:Label></p>
                                </div>
                            </div>
                        </ItemTemplate>
                    </asp:Repeater>
                </div>
            </div>
        </section>

        <!-- Statistics Section -->
        <section class="statistics">
            <div class="container">
                <h2 class="section-title">Nuestros Números</h2>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">
                            <asp:Label ID="lblEstudiantes" runat="server" Text="2500+"></asp:Label>
                        </div>
                        <div class="stat-label">Estudiantes Graduados</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">
                            <asp:Label ID="lblAnos" runat="server" Text="15"></asp:Label>
                        </div>
                        <div class="stat-label">Años de Experiencia</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">
                            <asp:Label ID="lblIdiomas" runat="server" Text="6"></asp:Label>
                        </div>
                        <div class="stat-label">Idiomas Ofrecidos</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">
                            <asp:Label ID="lblAprobacion" runat="server" Text="95%"></asp:Label>
                        </div>
                        <div class="stat-label">Tasa de Aprobación</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3><i class="fas fa-language"></i> CEL</h3>
                        <p>Centro Especializado en Lenguas</p>
                        <p>Formando ciudadanos globales a través del aprendizaje de idiomas.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><asp:HyperLink ID="lnkFooterCursos" NavigateUrl="~/Cursos.aspx" runat="server">Cursos</asp:HyperLink></li>
                            <li><asp:HyperLink ID="lnkFooterServicios" NavigateUrl="~/Servicios.aspx" runat="server">Servicios</asp:HyperLink></li>
                            <li><asp:HyperLink ID="lnkFooterHorarios" NavigateUrl="~/Horarios.aspx" runat="server">Horarios</asp:HyperLink></li>
                            <li><asp:HyperLink ID="lnkFooterContactos" NavigateUrl="~/Contactos.aspx" runat="server">Contactos</asp:HyperLink></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Información</h4>
                        <ul>
                            <li><asp:HyperLink ID="lnkFooterMision" NavigateUrl="~/Mision.aspx" runat="server">Misión</asp:HyperLink></li>
                            <li><asp:HyperLink ID="lnkFooterVision" NavigateUrl="~/Vision.aspx" runat="server">Visión</asp:HyperLink></li>
                            <li><asp:HyperLink ID="lnkFooterUbicacion" NavigateUrl="~/Contactos.aspx" runat="server">Ubicación</asp:HyperLink></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contacto</h4>
                        <p><i class="fas fa-phone"></i> +57 (1) 234-5678</p>
                        <p><i class="fas fa-envelope"></i> info@cel.edu.co</p>
                        <p><i class="fas fa-map-marker-alt"></i> Bogotá, Colombia</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; <asp:Label ID="lblAnoActual" runat="server"></asp:Label> Centro Especializado en Lenguas (CEL). Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </form>

    <script src="js/main.js"></script>
</body>
</html>
