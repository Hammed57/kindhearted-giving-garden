import { describe, expect, it } from "vitest";
import { PORTFOLIO } from "@/lib/portfolio";

describe("portfolio videos", () => {
  it("uses absolute hosted URLs for video playback across custom domains", () => {
    const videos = PORTFOLIO.flatMap((project) => [
      ...(project.cover.type === "video" ? [project.cover] : []),
      ...(project.video ? [{ src: project.video.src, type: "video" }] : []),
      ...project.gallery.filter((media) => media.type === "video"),
    ]);

    expect(videos.length).toBe(4);
    for (const video of videos) {
      expect(video.src).toMatch(
        /^https:\/\/kindhearted-giving-garden\.lovable\.app\/__l5e\/assets-v1\/.+\.mp4$/,
      );
    }
  });
});