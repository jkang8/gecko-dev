/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
*
* The contents of this file are subject to the Mozilla Public
* License Version 1.1 (the "License"); you may not use this file
* except in compliance with the License. You may obtain a copy of
* the License at http://www.mozilla.org/MPL/
*
* Software distributed under the License is distributed on an "AS
* IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
* implied. See the License for the specific language governing
* rights and limitations under the License.
*
* The Original Code is the Mozilla browser.
*
* The Initial Developer of the Original Code is Matt Judy. Portions
* of code @2002 nibfile.com.
*/

#import <Cocoa/Cocoa.h>


@interface CHExtendedTabView : NSTabView
{
  BOOL autoHides;
}

//  Behavior: Autohiding overrides the default tab visibility state.
//            To switch back to usual tabView behavior, setAutoHides:NO.
//			  Initial value is read from defaults.
- (BOOL)autoHides;
- (void)setAutoHides:(BOOL)newSetting;

-(void)addTabForURL:(NSString*)aURL;

@end
