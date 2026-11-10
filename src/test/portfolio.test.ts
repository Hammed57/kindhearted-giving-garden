import { describe, expect, it } from "vitest";
import { PORTFOLIO } from "@/lib/portfolio";

describe("portfolio videos", () => {
  it("uses valid playable URLs for all portfolio videos", () => {
    const videos = PORTFOLIO.flatMap((project) => [
      ...(project.cover.type === "video" ? [project.cover] : []),
      ...(project.video ? [{ src: project.video.src, type: "video" }] : []),
      ...project.gallery.filter((media) => media.type === "video"),
    ]);

    expect(videos.length).toBe(8);
    for (const video of videos) {
      expect(video.src).toMatch(/(\.mp4|assets-v1)/);
    }
  });

  it("adds the community beneficiary testimonial only once", () => {
    const videos = PORTFOLIO.flatMap((project) => [
      ...(project.cover.type === "video" ? [project.cover] : []),
      ...(project.video ? [{ src: project.video.src, type: "video" }] : []),
      ...project.gallery.filter((media) => media.type === "video"),
    ]);
    const newTestimonial = videos.filter((video) =>
      video.src.includes("community-beneficiary-testimonial.mp4"),
    );

    expect(newTestimonial).toHaveLength(1);
  });

  it("places the community elder interview as cover in community voices and only once", () => {
    const communityVoices = PORTFOLIO.find(
      (project) => project.slug === "live-community-conversations",
    );
    expect(communityVoices?.cover.src).toContain("community-elder-interview.mp4");

    const matches = PORTFOLIO.flatMap((project) => [
      ...(project.cover.type === "video" ? [project.cover] : []),
      ...(project.video ? [{ src: project.video.src, type: "video" }] : []),
      ...project.gallery.filter((media) => media.type === "video"),
    ]).filter((video) => video.src.includes("community-elder-interview.mp4"));

    expect(matches).toHaveLength(1);
  });

  it("includes the elders outreach prayers video in Community Voices & Video Testimonials", () => {
    const communityVoices = PORTFOLIO.find(
      (project) => project.slug === "live-community-conversations",
    );
    const inCommunityVoices = communityVoices?.gallery.some((media) =>
      media.src.includes("VID-20261107-WA0040"),
    );
    expect(inCommunityVoices).toBe(true);

    const matches = PORTFOLIO.flatMap((project) => [
      ...(project.cover.type === "video" ? [project.cover] : []),
      ...(project.video ? [{ src: project.video.src, type: "video" }] : []),
      ...project.gallery.filter((media) => media.type === "video"),
    ]).filter((video) => video.src.includes("VID-20261107-WA0040"));

    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("adds the maternity clinic appreciation video only once", () => {
    const matches = PORTFOLIO.flatMap((project) => [
      ...(project.cover.type === "video" ? [project.cover] : []),
      ...(project.video ? [{ src: project.video.src, type: "video" }] : []),
      ...project.gallery.filter((media) => media.type === "video"),
    ]).filter((video) => video.src.includes("VID-20261107-WA0039"));

    expect(matches).toHaveLength(1);
  });
});
