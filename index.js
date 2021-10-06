const DEFAULT_OPTIONS = {perPage: 3, gap: 16};

class Slider{
    constructor(selector, options = DEFAULT_OPTIONS) {
        this.selector = selector;
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        this.items = null;
        this.contentWidth = 0;
        this.maxScroll = 0;

        window.addEventListener("load", () => this.mount());
        window.addEventListener("resize", () => this.mount());
    }

    isValid(){
        return Boolean(this.items) && this.contentWidth > 0 && this.maxScroll > 0;
    }

    mount(){
        const slider = document.querySelector(this.selector);
        if(!slider){
            console.error(`${this.selector} selector not found!`);
            return;
        }

        const content = slider.querySelector('.slider-content');
        if(!content){
            console.error(`'slider-content' class not found in ${this.selector} selector.`)
            return;
        }
        this.contentWidth = content.offsetWidth;

        this.items = slider.querySelector('.slider-items');
        if(!this.items){
            console.error(`'slider-items' class not found in ${this.selector} selector.`)
            return;
        }
        const itemCount = this.items.children.length;

        const {gap, perPage} = this.options;
        const contentWidthWithoutGap = this.contentWidth - (gap * perPage);
        const perItemWidth = Math.floor(contentWidthWithoutGap / perPage);

        this.items.style.width = (itemCount * (perItemWidth + gap)) + 'px';
        for (const item of this.items.children) {
            item.style.margin = gap + 'px';
            item.style.width = perItemWidth + 'px';
        }

        this.maxScroll = Math.floor(itemCount / perPage) * this.contentWidth;
        this.scroll = 0;

        // NAVIGATION INITIALIZE
        const [navigationPrev, navigationNext] = slider.getElementsByClassName('slider-navigation');
        if(navigationPrev) navigationPrev.onclick = () => this.prev();
        if(navigationNext) navigationNext.onclick = () => this.next();
    }

    prev(){
        if(!this.isValid()){
            return;
        }

        this.scroll += this.contentWidth;
        if(this.scroll > 0){
            this.scroll = -this.maxScroll;
        }

        this.items.style.transform = `translateX(${this.scroll}px)`;
    }

    next(){
        if(!this.isValid()){
            return;
        }

        this.scroll -= this.contentWidth;
        if(this.scroll < (-this.maxScroll)){
            this.scroll = 0;
        }

        this.items.style.transform = `translateX(${this.scroll}px)`;
    }
}

module.exports = Slider;