export function validateURLParams({
    courses,
    course_limit_page,
    courses_categories,
}) {
    const page = getURLparam('page'); //[1]
    if (page && page > Math.ceil(courses.length / course_limit_page)) {
        window.location.href = '404.html?error=invalid_page';
        console.error('Page not found', page);
    }

    const category = getURLparam('category'); //[1,2]
    if (category) {
        category.forEach((id) => {
            if (!courses_categories.find((c) => c.id === id)) {
                console.error('Category not found', id);
                window.location.href = '404.html?error=invalid_category';
            }
        });
    }
}

export function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

export function addSearchGoToURL(key, value) {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    params.set(key, value);
    url.search = params.toString();
    // console.log(url.href);
    window.location.href = url.href;
}

export function getPageIndex() {
    let url = new URL(window.location.href);
    let page = new URLSearchParams(url.search).get('page');
    return page ? parseInt(page) : 1;
}

export function getURLparam(key) {
    let url = new URL(window.location.href);
    console.log('🚀 ~ getURLparam ~ url:', url)
    let param = new URLSearchParams(url.search).get(key);
    console.log('🚀 ~ getURLparam ~ param:', param)
    return param?.split(',').map(Number);
}

export function setHistorySearch(key, value) {
    let url = new URLSearchParams(window.location.search);
    let list = [];
    list = url.get(key)?.split(',')?.map(Number) || [];
    if (list.includes(value)) {
        return;
    } else if (url.has(key)) {
        url.set(key, url.get(key) + ',' + value);
    } else {
        url.append(key, value);
    }
    window.history.pushState({}, '', `${location.pathname}?${url}`);
}

export function replaceHistorySearch(key, value) {
    let url = new URLSearchParams(window.location.search);
    let list = [];
    list = url.get(key)?.split(',')?.map(Number) || [];
    if (list.includes(value)) {
        return;
    } else if (url.has(key)) {
        url.set(key, value);
    } else {
        url.append(key, value);
    }
    window.history.pushState({}, '', `${location.pathname}?${url}`);
}

export function removeHistorySearch(key, value) {
    let url = new URLSearchParams(window.location.search);
    let list = [];
    list = url.get(key)?.split(',')?.map(Number) || [];
    if (list.includes(value)) {
        list = list.filter((item) => item !== value);
        url.set(key, list.join(','));
        if (list.length === 0) {
            url.delete(key);
        }
        window.history.pushState({}, '', `${location.pathname}?${url}`);
    }
}
