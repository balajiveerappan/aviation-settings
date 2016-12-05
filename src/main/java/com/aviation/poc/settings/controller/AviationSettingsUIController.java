package com.aviation.poc.settings.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AviationSettingsUIController {

	@RequestMapping("/")
	public String splashScreen(){
		return "splash";
	}
	
	@RequestMapping("/filter")
	public String unitFilter(){
		return "filter";
	}
	
	
	@RequestMapping("/splash")
	public String splash(){
		return "splash";
	}
}
