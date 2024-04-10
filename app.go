package main

import (
	"context"
	"fmt"
	"github.com/gocolly/colly"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SearchLyric(url string) []string {
	var lyrics []string

	c := colly.NewCollector(
		colly.AllowedDomains("www.lyrical-nonsense.com"),
	)

	c.OnHTML(".olyrictext", func(e *colly.HTMLElement) {
		lyric := e.Text
		lyrics = append(lyrics, lyric)
		fmt.Println("Lyrics found:", lyric)
	})

	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL.String())
	})

	_ = c.Visit(url)

	return lyrics
}
