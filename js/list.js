import { courses } from '../utils/var.js'; /*  {
    id: 1,
    title: 'cs 50',
    price: 100,
    old_price: 200,
    image: 'https://source.unsplash.com/featured/?computerscience',
    category: 1,
    description: 'this is a computer science course',
    author: 'David Malan',
    rating: 4.5,
    reviews: 1000,
    students: 1000,
    lessons: 10,
    update: '2021-09-01',
    language: 'english',
    sale: 45,
    tags: ['marketing', 'advertising', 'branding'],
}, */
import {
    addSearchGoToURL,
    generateRatingStars,
    getPageIndex,
    getURLparam,
    removeHistorySearch,
    replaceHistorySearch,
    setHistorySearch,
    validateURLParams,
} from '../utils/helpers.js';
import { courses_categories } from '../utils/var.js'; /* {
    id: 1,
    title: 'computer science',
    image: 'https://source.unsplash.com/featured/?computerscience',
}, */
import { authors } from '../utils/var.js'; /* {
    id: 1,
    name: 'David Malan',
    image: 'https://source.unsplash.com/featured/?computerscience',
}, */
import { course_limit_page } from '../utils/var.js';
import {
    authorFilter,
    card,
    categoryFilter,
    pageNumber,
    ratingFilter,
} from '../utils/components.js';

(function () {
    function goto404() {
        validateURLParams({ courses, courses_categories, course_limit_page });
    }
    async function fetchCoursesFromApi() {
        // http://192.168.1.15:8000/api/courses
        try{
            let res = await fetch('http://192.168.1.15:8000/api/courses');
            console.log('SALLAM ~ loadCoursesFromapi ~ res:', res)
            let data = await res.json();
            console.log('SALLAM ~ loadCoursesFromapi ~ data:', data.data.data)
            renderCourseList(
                data.data.data,
                authors,
                courses_categories,
                generateRatingStars,
                course_limit_page
            );
        }
        catch(err){
            console.log('SALLAM ~ loadCoursesFromapi ~ err:', err)
        }
    }
    /* 
    {
    "id": 14,
    "title": "Placeat animi vero omnis iste nihil suscipit et.",
    "price": "67.44",
    "discount": "57.16",
    "price_after_discount": "6.89",
    "image": "http://192.168.1.15:8000/dashboard/images/avatar.jpg",
    "rate": 0,
    "users_count": 0,
    "lessons_count": 0,
    "rate_count": 0,
    "instructor": "",
    "desc": "Possimus tenetur possimus id distinctio enim ipsum harum."
    }
     */
    fetchCoursesFromApi();
    goto404();
})();

function renderCourseList(
    courses,
    authors,
    courses_categories,
    generateRatingStars,
    course_limit_page
) {
    console.log('🚀 ', courses,
    authors,
    courses_categories,
    generateRatingStars,
    course_limit_page)
    const courseList = document.querySelector('.rbt-course-grid-column');
    courseList.innerHTML = '';
    let page_index = getPageIndex();
    let page_count = Math.ceil(courses.length / course_limit_page);
    let start = (page_index - 1) * course_limit_page;
    let end = start + course_limit_page;
    let current_courses = courses.slice(start, end);
    current_courses.forEach((course) => {
        let courseCard = document.createElement('div');
        courseCard.classList.add('course-grid-3');
        courseCard.innerHTML = card({
            course,
            authors,
            courses_categories,
            generateRatingStars,
        });

        courseList.appendChild(courseCard);
    });
}