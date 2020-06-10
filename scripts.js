var testimonials = [
    {
        text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        img: './images/image-tanya.jpg'
    },
    {
        text: `" If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        img: './images/image-john.jpg'
    }
]

var currentIndex = 0;

fillFields(0);

function prev(){
    currentIndex--;
    if(currentIndex < 0) currentIndex = testimonials.length-1;

    fillFields(currentIndex);
}

function next(){
    currentIndex++;
    if(currentIndex >= testimonials.length) currentIndex = 0;

    fillFields(currentIndex);
}

function fillFields(index){
    document.getElementById('text').innerHTML = testimonials[index].text;
    document.getElementById('name').innerHTML = testimonials[index].name;
    document.getElementById('job').innerHTML = testimonials[index].job;
    document.getElementById('profile-picture').setAttribute('src', testimonials[index].img);
}