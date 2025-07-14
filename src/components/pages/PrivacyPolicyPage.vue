<script setup>
import { useSEO, seoConfigs } from '../../composables/useSEO.js'

// Configurar SEO para la página de política de privacidad
const { useSEOConfig } = useSEO()
useSEOConfig(seoConfigs.privacy)
</script>

<template>
  <main>
    <article class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
        <p class="mt-2 text-gray-600">Última actualización: 12/07/2025</p>
      </header>
      
      <section class="prose max-w-none">
        <div class="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 class="text-xl font-bold">Información General</h2>
            <p><strong>Responsable del Tratamiento:</strong> Katherin Amador</p>
            <p><strong>Ubicación:</strong> Buga, Valle del Cauca, Colombia.</p>
            <p><strong>Correo electrónico:</strong> <a href="mailto:k8labs.empresa@gmail.com">k8labs.empresa@gmail.com</a></p>
            <p><strong>Sitio web:</strong> https://k8labs.dev</p>
        </div>

        <h2 id="introduccion">1. Introducción</h2>
        <p>En cumplimiento del artículo 15 de la Constitución Política de Colombia, la Ley 1581 de 2012 "Ley de Protección de Datos Personales", el Decreto 1377 de 2013 y demás normatividad vigente sobre protección de datos personales, establecemos la presente Política de Privacidad y Protección de Datos Personales.</p>
        <p>Esta política establece los términos y condiciones bajo los cuales tratamos la información personal que usted nos proporciona a través de nuestro sitio web, específicamente mediante el formulario de contacto disponible en nuestra página.</p>

        <h2 id="datos-recopilados">2. Datos Personales que Recopilamos</h2>
        <h3>2.1 Información del Formulario de Contacto</h3>
        <p>A través del formulario de contacto en nuestro sitio web, podemos recopilar los siguientes datos personales:</p>
        <ul>
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Mensaje o consulta</li>
        </ul>
        <h3>2.2 Información Técnica</h3>
        <p>Cuando navega por nuestro sitio web, podemos recopilar automáticamente cierta información técnica como:</p>
        <ul>
            <li>Dirección IP</li>
            <li>Tipo de navegador</li>
            <li>Sistema operativo</li>
            <li>Páginas visitadas</li>
            <li>Fecha y hora de acceso</li>
        </ul>

        <h2 id="finalidad">3. Finalidad del Tratamiento</h2>
        <p>Los datos personales que recopilamos serán utilizados exclusivamente para las siguientes finalidades:</p>
        <ul>
            <li><strong>Responder consultas y solicitudes:</strong> Dar respuesta a las consultas, dudas, comentarios o inquietudes que pueda tener sobre nuestros servicios.</li>
            <li><strong>Comunicación comercial:</strong> Informar sobre nuestros servicios de desarrollo web, automatizaciones y desarrollo personalizado.</li>
            <li><strong>Gestión de relaciones comerciales:</strong> Mantener y fortalecer la relación comercial con nuestros clientes potenciales.</li>
            <li><strong>Mejora del servicio:</strong> Optimizar nuestros servicios basándose en sus consultas y necesidades.</li>
            <li><strong>Cumplimiento legal:</strong> Atender requerimientos de autoridades competentes cuando sea legalmente exigible.</li>
        </ul>

        <h2 id="bases-juridicas">4. Bases Jurídicas del Tratamiento</h2>
        <p>El tratamiento de sus datos personales se fundamenta en:</p>
        <ul>
            <li><strong>Consentimiento:</strong> Su autorización expresa al completar el formulario de contacto.</li>
            <li><strong>Interés legítimo:</strong> Para el desarrollo de nuestra actividad comercial y prestación de servicios.</li>
            <li><strong>Cumplimiento legal:</strong> Para dar cumplimiento a obligaciones legales aplicables.</li>
        </ul>

        <h2 id="principios">5. Principios para el Tratamiento de Datos</h2>
        <p>En el tratamiento de sus datos personales aplicamos los siguientes principios establecidos en la Ley 1581 de 2012:</p>
        <ol>
            <li><strong>Principio de Legalidad:</strong> El tratamiento se sujeta a lo establecido en la Constitución y las leyes colombianas.</li>
            <li><strong>Principio de Finalidad:</strong> Los datos se tratan únicamente para fines legítimos e informados al titular.</li>
            <li><strong>Principio de Libertad:</strong> El tratamiento se realiza únicamente con el consentimiento previo, expreso e informado del titular.</li>
            <li><strong>Principio de Veracidad:</strong> La información debe ser veraz, completa, exacta, actualizada y comprobable.</li>
            <li><strong>Principio de Transparencia:</strong> Garantizamos el derecho a obtener información sobre el tratamiento de sus datos.</li>
            <li><strong>Principio de Acceso y Circulación Restringida:</strong> El acceso a la información se limita únicamente a personas autorizadas.</li>
            <li><strong>Principio de Seguridad:</strong> Implementamos medidas técnicas y administrativas para proteger sus datos.</li>
            <li><strong>Principio de Confidencialidad:</strong> Mantenemos la confidencialidad de la información incluso después de terminada la relación.</li>
        </ol>

        <h2 id="derechos">6. Derechos de los Titulares</h2>
        <p>Como titular de datos personales, usted tiene los siguientes derechos:</p>
        <ul>
            <li><strong>Derecho de Acceso:</strong> Conocer si sus datos personales están siendo tratados y acceder a ellos de forma gratuita.</li>
            <li><strong>Derecho de Rectificación:</strong> Solicitar la corrección de datos inexactos, incompletos o que induzcan a error.</li>
            <li><strong>Derecho de Actualización:</strong> Mantener actualizados sus datos personales cuando sea necesario.</li>
            <li><strong>Derecho de Supresión:</strong> Solicitar la eliminación de sus datos cuando el tratamiento no se ajuste a las disposiciones legales.</li>
            <li><strong>Derecho de Revocatoria:</strong> Revocar la autorización otorgada para el tratamiento de sus datos personales.</li>
            <li><strong>Derecho de Información:</strong> Ser informado sobre el uso que se ha dado a sus datos personales.</li>
            <li><strong>Derecho de Oposición:</strong> Oponerse al tratamiento de sus datos personales por motivos legítimos.</li>
        </ul>

        <h2 id="procedimientos">7. Procedimientos para el Ejercicio de Derechos</h2>
        <p>Para ejercer cualquiera de los derechos anteriormente mencionados, puede contactarnos a través del correo electrónico: <a href="mailto:k8labs.empresa@gmail.com">k8labs.empresa@gmail.com</a>.</p>
        <h3>7.1 Requisitos para la Solicitud</h3>
        <p>Para procesar su solicitud, debe proporcionar:</p>
        <ul>
            <li>Identificación completa del titular.</li>
            <li>Descripción clara y precisa de los datos objeto de consulta o reclamo.</li>
            <li>Dirección física o electrónica para recibir respuesta.</li>
            <li>Documentos que soporten la solicitud.</li>
        </ul>
        <h3>7.2 Términos de Respuesta</h3>
        <p>Responderemos a su solicitud dentro de los siguientes términos:</p>
        <ul>
            <li><strong>Consultas:</strong> Máximo 10 días hábiles.</li>
            <li><strong>Reclamos:</strong> Máximo 15 días hábiles.</li>
            <li><strong>Rectificación, actualización o supresión:</strong> Máximo 5 días hábiles una vez completada la investigación.</li>
        </ul>

        <h2 id="seguridad">8. Medidas de Seguridad</h2>
        <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales, tales como encriptación, certificados SSL, controles de acceso y respaldos periódicos.</p>

        <h2 id="conservacion">9. Conservación de Datos</h2>
        <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades del tratamiento y las obligaciones legales correspondientes. Una vez cumplido el tiempo de conservación, procederemos a la eliminación segura de sus datos.</p>

        <h2 id="transferencia">10. Transferencia y Transmisión de Datos</h2>
        <p>Sus datos personales podrán ser transferidos dentro y fuera del territorio colombiano únicamente a proveedores de servicios tecnológicos y entidades regulatorias cuando sea legalmente requerido, garantizando siempre niveles adecuados de protección.</p>

        <h2 id="cookies">11. Cookies y Tecnologías Similares</h2>
        <p>Nuestro sitio web utiliza cookies técnicas necesarias para su funcionamiento básico. No utilizamos cookies de seguimiento o publicitarias. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>

        <h2 id="menores">12. Menores de Edad</h2>
        <p>No recopilamos intencionalmente datos personales de menores de edad. Si un menor de edad nos proporciona información, procederemos a eliminarla inmediatamente. Los padres o tutores son responsables de supervisar el uso de internet por parte de los menores.</p>

        <h2 id="cambios-politica">13. Cambios en la Política</h2>
        <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios significativos serán notificados a través de nuestro sitio web.</p>

        <h2 id="contacto-privacidad">14. Contacto para Consultas sobre Privacidad</h2>
        <p>Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos personales, puede contactarnos en: <a href="mailto:k8labs.empresa@gmail.com">k8labs.empresa@gmail.com</a>.</p>

        <h2 id="autoridad-control">15. Autoridad de Control</h2>
        <p>En caso de considerar que el tratamiento de sus datos personales infringe la normatividad vigente, puede presentar una queja ante la Superintendencia de Industria y Comercio (www.sic.gov.co).</p>

        <h2 id="aceptacion-declaracion">16. Declaración de Aceptación</h2>
        <p>Al utilizar nuestro sitio web y completar el formulario de contacto, usted declara haber leído, entendido y aceptado los términos de esta Política de Privacidad y autoriza el tratamiento de sus datos personales para las finalidades aquí descritas.</p>

        <p class="mt-8 text-center text-sm"><em>Nota: Esta política de privacidad cumple con los requisitos establecidos en la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normatividad colombiana sobre protección de datos personales. Para casos específicos o dudas particulares, recomendamos consultar con un abogado especializado en protección de datos.</em></p>
      </section>
    </article>
  </main>
</template>

<style scoped>
.prose h2 {
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #e2e8f0;
}
.prose h3 {
  font-size: 1.25em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
</style> 