---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
slug: {{ replace .TranslationBaseName "_" "-" | urlize }}
date: {{ .Date }}
type: {{ .Type }}
tags: []
include_math = false
draft: true
---
