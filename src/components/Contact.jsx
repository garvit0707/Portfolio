import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '', show: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: '❌ Please fill in all required fields.', show: true });
      setTimeout(() => setStatus(prev => ({ ...prev, show: false })), 7000);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual EmailJS integration)
    setTimeout(() => {
      setStatus({ type: 'success', message: "✅ Message sent! I'll get back to you soon.", show: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setStatus(prev => ({ ...prev, show: false })), 7000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's <span>Build</span><br />Together
            </h2>
            <p className="about-text mb-5">
              Whether you have a project in mind, a job opportunity, or just want to connect — I'm always open to meaningful conversations.
            </p>

            <div className="d-flex flex-column gap-3">
              <a href="mailto:garvit.sharma.0707@gmail.com" className="contact-info-item">
                <i className="bi bi-envelope-fill ci-icon"></i>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                    Email
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    garvit.sharma.0707@gmail.com
                  </div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/garvit77/" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <i className="bi bi-linkedin ci-icon"></i>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                    LinkedIn
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    linkedin.com/in/garvit77
                  </div>
                </div>
              </a>
              <a href="https://github.com/garvit0707" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <i className="bi bi-github ci-icon"></i>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                    GitHub
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    github.com/garvit0707
                  </div>
                </div>
              </a>
              <div className="contact-info-item" style={{ pointerEvents: 'none' }}>
                <i className="bi bi-geo-alt-fill ci-icon"></i>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                    Location
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    Noida
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="150">
            <div className="contact-card">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label-custom">Your Name</label>
                  <input 
                    type="text" 
                    id="sender-name" 
                    name="name" 
                    className="form-control-dark"
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label-custom">Email Address</label>
                  <input 
                    type="email" 
                    id="sender-email" 
                    name="email" 
                    className="form-control-dark"
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label-custom">Subject</label>
                  <input 
                    type="text" 
                    id="sender-subject" 
                    name="subject" 
                    className="form-control-dark"
                    placeholder="Project Collaboration / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label-custom">Message</label>
                  <textarea 
                    id="sender-message" 
                    name="message" 
                    className="form-control-dark" 
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary-custom w-100 justify-content-center"
                  style={{ border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><i className="bi bi-hourglass-split"></i> Sending...</>
                  ) : (
                    <><i className="bi bi-send-fill"></i> Send Message</>
                  )}
                </button>
                {status.show && (
                  <div id="form-msg" className="mt-3 text-center" style={{ 
                    fontSize: '0.875rem', 
                    display: 'block',
                    color: status.type === 'error' ? '#ff6b6b' : 'var(--accent)'
                  }}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
