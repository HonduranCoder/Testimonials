const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Estefani has helped us the best with redesigning our website. She not only reduced its loading time by implementing the right technology but also ensured that it is attractive and easy-to-use. She developed custom modules by understanding our needs effectively, ensured seamless communication for managing exigencies and delivered regular updates. Highly recommend her if you are looking for great output.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'This woman is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire her, you will not be disappointed by the work delivered. She will go the extra mile to make sure that you are happy with your project. I will surely work again with her!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "This woman is a hard worker. Communication was also very good with her and she was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with her.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "This woman does everything she can to get the job done and done right. This is the second time I've hired her, and I'll hire her again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But she proved me wrong, she delivered an outstanding work and she managed to deliver 1 day prior to the deadline. When I asked for some revisions she made them in MINUTES. I'm looking forward to working with her again and I totally recommend her. Thanks again!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Top notch designer and front end developer. She communicates well, works fast and produces quality work. We have been lucky to work with her!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Proactive and responsible, with a strong work ethic. She is very strong in PSD2HTML conversions and HTML/CSS technology. She is a quick learner, eager to learn new technologies. She is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
