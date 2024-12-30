import {M as d} from "./BSORQlvt.js";
var c = (e => (e.SectionHeroRecord = "SectionHero",
e.SectionTitleRecord = "SectionTitle",
e.SectionArticleListRecord = "SectionArticles",
e.SectionRelatedArticlesListRecord = "SectionRelatedArticles",
e.SectionBodyRecord = "SectionBody",
e.SectionContactFormRecord = "SectionContactForm",
e.SectionCtaRecord = "SectionCta",
e.SectionFaqRecord = "SectionFaq",
e.SectionFeaturesListRecord = "SectionFeatures",
e.SectionImageGalleryRecord = "SectionImageGallery",
e.SectionInquiryFormRecord = "SectionInquiryForm",
e.SectionLogosListRecord = "SectionLogos",
e.SectionMediaBlockRecord = "SectionMedia",
e.SectionProjectsListRecord = "SectionProjects",
e.SectionTestimonialsListRecord = "SectionTestimonials",
e.SectionVideoRecord = "SectionVideo",
e))(c || {});
function l() {
    return {
        resolveSectionComponent: r => {
            var t;
            if (!r)
                return;
            const o = (t = Object.entries(c).find( ([i,a]) => i === r)) == null ? void 0 : t[1];
            if (!o) {
                console.error(`Component for model type [${r}] does not exist.`);
                return
            }
            return d(o)
        }
    }
}
export {l as u};
