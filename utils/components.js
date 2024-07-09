// import { generateRatingStars } from './helpers';

// import { authors, courses_categories } from "./var";

/**
 * Card component
 * @param {Object} course - The course object
 * @param {Array} authors - The authors array
 * @param {Array} courses_categories - The courses categories array
 * @param {Function} generateRatingStars - The generateRatingStars function
 * @returns {string} - The card HTML
 */
export function card({
    course,
    authors,
    courses_categories,
    generateRatingStars,
}) {
    return `<div class="rbt-card variation-01 rbt-hover">
    <div class="rbt-card-img">
        <a href="./course-details-2.html">
            <img src="${course.image}" alt="Card image" />
            ${
                course.sale
                    ? `
            <div class="rbt-badge-3 bg-white">
                <span>${course.sale}%</span>
                <span>Off</span>
            </div>
            `
                    : ''
            }
        </a>
    </div>
    <div class="rbt-card-body">
        <div class="rbt-card-top">
            <div class="rbt-review">
                <div class="rating">
                    ${generateRatingStars(course.rating)}
                </div>
                <span class="rating-count"> (${course.reviews} Reviews)</span>
            </div>
            <div class="rbt-bookmark-btn">
                <a class="rbt-round-btn" title="Bookmark" href="#"
                    ><i class="feather-bookmark"></i
                ></a>
            </div>
        </div>

        <h4 class="rbt-card-title">
            <a href="./course-details-2.html">${course.title}</a>
        </h4>

        <ul class="rbt-meta">
            <li><i class="feather-book"></i>${course.lessons} Lessons</li>
            <li><i class="feather-users"></i>${course.students} Students</li>
            <!---   <><i class="feather-tag"></i>${
                courses_categories.find(
                    (category) => category.id === course.category
                )?.title
            }</ li>--->
        </ul>

        <p class="rbt-card-text">${course.description}</p>
        <div class="rbt-author-meta mb--10">
            <div class="rbt-avater">
                <a href="#">
                    <img
                        src="${
                            authors.find(
                                (author) => author.id === course.author
                            )?.image
                        }"
                        alt="${
                            authors.find(
                                (author) => author.id === course.author
                            )?.name
                        }"
                    />
                </a>
            </div>
            <div class="rbt-author-info">
                By
                <a href="profile.html"
                    >${
                        authors.find((author) => author.id === course.author)
                            ?.name
                    }</a
                >
                In
                <a href="#"
                    >${
                        courses_categories.find(
                            (category) => category.id === course.category
                        )?.title
                    }</a
                >
            </div>
        </div>
        <div class="rbt-card-bottom">
            <div class="rbt-price">
                <span class="current-price"
                    >$${
                        course.price - (course.price * (course.sale || 0)) / 100
                    }</span
                >
                ${
                    course.sale
                        ? `<span class="off-price">$${course.price}</span
                >`
                        : ''
                }
            </div>
            <a class="rbt-btn-link left-icon" href="./course-details-2.html"
                ><i class="feather-shopping-cart"></i> Add To Cart</a
            >
        </div>
    </div>
</div>
`;
}

/**
 * Pagination number component
 * @param {Number} i
 * @returns {string} - The pagination number HTML
 */
export function pageNumber(i) {
    return `<a id="course-page" href="#">${i}</a>`;
}

export function categoryFilter(category, courses) {
    return `
    <input id="cat-list-${category.id}" type="checkbox" name="cat-list-${
        category.id
    }" />
    <label for="cat-list-${category.id}">${
        category.title
    }<span class="rbt-lable count">${
        courses.filter((course) => course.category === category.id).length
    }</span></label>
`;
}

export function ratingFilter(i, courses, generateRatingStars) {
    return `
    <input id="cat-radio-${i}" type="radio" name="rbt-radio" data-waschecked="false" />
    <label for="cat-radio-${i}">
        <span class="rating">
            ${generateRatingStars(i)}
        </span>
        <span class="rbt-lable count">${
            courses.filter((course) => {
                return course.rating >= i && course.rating < i + 1;
            }).length
        }</span>
    </label> 
`;
}

export function authorFilter(author, courses) {
    return `
    <input id="ins-list-${author.id}" type="checkbox" name="ins-list-${
        author.id
    }" />
    <label for="ins-list-${author.id}">${
        author.name
    }<span class="rbt-lable count">${
        courses.filter((course) => course.author === author.id).length
    }</span></label>
`;
}
