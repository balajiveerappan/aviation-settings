package com.aviation.poc.settings.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AviationSettingsUIController {

	@RequestMapping("/")
	public String splashScreen(){
		return "splash";
	}
	
}
